import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Share } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import FileViewer from "react-native-file-viewer";
import * as OpenAnything from "react-native-openanything";
// import Share from 'react-native-share';

const Historycard = ({
  date,
  address,
  amount,
  navigation,
  orderId,
  serdate,
  sertyp,
  invoiceamount,
  odometerReading,
  dealerName,
  invoicePDF,
  orderStatus,
  modelName,
  brandName,
  fuelType,
  createDate,
  pickUpDate,
  pickUpSlot
}) => {
  const [ordersdata, setordersdata] = useState();
  const [items, setitems] = useState([]);
  const [total, settotal] = useState("");
  const [userid, setuserid] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  // console.log(orderId);

  const share = (link) => {
    Share.share({
      message: link,
    });
  };

  const getdata = () => {
    fetch("https://digi-servizzy-backend.herokuapp.com/api/invoice", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        orderid: orderId,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setitems(data.orderData.items);
        settotal(data.orderData.total);
        setuserid(data.orderData.userId);
        setname(data.orderData.userDetails.data.name);
        setphone(data.orderData.userDetails.data.phoneNumberTwo);
      });
  };
  // ordersdata ? console.log(ordersdata.items) : null;
  useEffect(() => {
    getdata();
  }, []);

  const list = items.map((item, index) => {
    return `<tr>
        <td>${item.name}</td>
        <td class="alignright">Rs.${item.price}</td>
      </tr>`;
  });

  // console.log(list);

  // start
  const html = `
  <html>
    <head>
      <meta charset="utf-8" />
      <title>My Birth Letter</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
      />
  
      <style type="text/css">
      /* -------------------------------------
      GLOBAL
      A very basic CSS reset
  ------------------------------------- */
  * {
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
  }
  
  img {
      max-width: 100%;
  }
  
  body {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      width: 100% !important;
      height: 100%;
      line-height: 1.6;
  }
  
  /* Let's make sure all tables have defaults */
  table td {
      vertical-align: top;
  }
  
  /* -------------------------------------
      BODY & CONTAINER
  ------------------------------------- */
  body {
      background-color: #f6f6f6;
  }
  
  .body-wrap {
      background-color: #f6f6f6;
      width: 100%;
  }
  
  .container {
      display: block !important;
      max-width: 600px !important;
      margin: 0 auto !important;
      /* makes it centered */
      clear: both !important;
  }
  
  .content {
      max-width: 600px;
      margin: 0 auto;
      display: block;
      padding: 20px;
  }
  
  /* -------------------------------------
      HEADER, FOOTER, MAIN
  ------------------------------------- */
  .main {
      background: #fff;
      border: 1px solid #e9e9e9;
      border-radius: 3px;
  }
  
  .content-wrap {
      padding: 20px;
  }
  
  .content-block {
      padding: 0 0 20px;
  }
  
  .header {
      width: 100%;
      margin-bottom: 20px;
  }
  
  .footer {
      width: 100%;
      clear: both;
      color: #999;
      padding: 20px;
  }
  .footer a {
      color: #999;
  }
  .footer p, .footer a, .footer unsubscribe, .footer td {
      font-size: 12px;
  }
  
  /* -------------------------------------
      TYPOGRAPHY
  ------------------------------------- */
  h1, h2, h3 {
      font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      color: #000;
      margin: 40px 0 0;
      line-height: 1.2;
      font-weight: 400;
  }
  
  h1 {
      font-size: 32px;
      font-weight: 500;
  }
  
  h2 {
      font-size: 24px;
  }
  
  h3 {
      font-size: 18px;
  }
  
  h4 {
      font-size: 14px;
      font-weight: 600;
  }
  
  p, ul, ol {
      margin-bottom: 10px;
      font-weight: normal;
  }
  p li, ul li, ol li {
      margin-left: 5px;
      list-style-position: inside;
  }
  
  /* -------------------------------------
      LINKS & BUTTONS
  ------------------------------------- */
  a {
      color: #1ab394;
      text-decoration: underline;
  }
  
  .btn-primary {
      text-decoration: none;
      color: #FFF;
      background-color: #1ab394;
      border: solid #1ab394;
      border-width: 5px 10px;
      line-height: 2;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      display: inline-block;
      border-radius: 5px;
      text-transform: capitalize;
  }
  
  /* -------------------------------------
      OTHER STYLES THAT MIGHT BE USEFUL
  ------------------------------------- */
  .last {
      margin-bottom: 0;
  }
  
  .first {
      margin-top: 0;
  }
  
  .aligncenter {
      text-align: center;
  }
  
  .alignright {
      text-align: right;
  }
  
  .alignleft {
      text-align: left;
  }
  
  .clear {
      clear: both;
  }
  
  /* -------------------------------------
      ALERTS
      Change the class depending on warning email, good email or bad email
  ------------------------------------- */
  .alert {
      font-size: 16px;
      color: #fff;
      font-weight: 500;
      padding: 20px;
      text-align: center;
      border-radius: 3px 3px 0 0;
  }
  .alert a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
  }
  .alert.alert-warning {
      background: #f8ac59;
  }
  .alert.alert-bad {
      background: #ed5565;
  }
  .alert.alert-good {
      background: #1ab394;
  }
  
  /* -------------------------------------
      INVOICE
      Styles for the billing table
  ------------------------------------- */
  .invoice {
      margin: 40px auto;
      text-align: left;
      width: 80%;
  }
  .invoice td {
      padding: 5px 0;
  }
  .invoice .invoice-items {
      width: 100%;
  }
  .invoice .invoice-items td {
      border-top: #eee 1px solid;
  }
  .invoice .invoice-items .total td {
      border-top: 2px solid #333;
      border-bottom: 2px solid #333;
      font-weight: 700;
  }
  
  /* -------------------------------------
      RESPONSIVE AND MOBILE FRIENDLY STYLES
  ------------------------------------- */
  @media only screen and (max-width: 640px) {
      h1, h2, h3, h4 {
          font-weight: 600 !important;
          margin: 20px 0 5px !important;
      }
  
      h1 {
          font-size: 22px !important;
      }
  
      h2 {
          font-size: 18px !important;
      }
  
      h3 {
          font-size: 16px !important;
      }
  
      .container {
          width: 100% !important;
      }
  
      .content, .content-wrap {
          padding: 10px !important;
      }
  
      .invoice {
          width: 100% !important;
      }
  }
      </style>
    </head>
  
    <body>
      <div class="section"></div>
  
      <table class="body-wrap">
      <tbody><tr>
          <td></td>
          <td class="container" width="600">
              <div class="content">
                  <table class="main" width="100%" cellpadding="0" cellspacing="0">
                      <tbody><tr>
                          <td class="content-wrap aligncenter">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                  <tbody><tr>
                                      <td class="content-block">
                                          <h2>Thanks for using servizzy app</h2>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="content-block">
                                          <table class="invoice">
                                              <tbody><tr>
                                                  <td>${name}<br>ID : ${userid}<br>${phone}<br>Order ID : ${orderId}</td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class="invoice-items" cellpadding="0" cellspacing="0">
                                                          <tbody>
                                                          ${list}
                                                         
                                                          
                                                          <tr class="total">
                                                              <td class="alignright" width="80%">Total</td>
                                                              <td class="alignright">INR ${total}</td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="content-block">
                                         
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="content-block">
                                          
                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
                  <div class="footer">
                      <table width="100%">
                          <tbody><tr>
                              <td class="aligncenter content-block">Questions? Email <a href="mailto:"></a></td>
                          </tr>
                      </tbody></table>
                  </div></div>
          </td>
          <td></td>
      </tr>
  </tbody></table>
    </body>
  </html>
  `;
  const createAndSavePDF = async () => {
    try {
      const ShareResponse = await Share.open(invoicePDF);
      //     console.log(invoicePDF);
      // const { uri } = await Print.printToFileAsync({ html });
      //   console.log(uri);
      // if (Platform.OS === "ios") {
      //   await Sharing.shareAsync(uri);
      // } else {
      //   // const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      //   // if (perm.status != "granted") {
      //   //   return;
      //   // }
      //   // const permission = await MediaLibrary.requestPermissionsAsync();
      //   // const permossion2 = await MediaLibrary.getPermissionsAsync();

      //   // if (permission.granted && permossion2.granted) {
      //   //   console.log(uri);
      //   //   const asset = await MediaLibrary.createAssetAsync(uri);
      //   //   const album = await MediaLibrary.createAlbumAsync(
      //   //     "testapp",
      //   //     asset,
      //   //     false
      //   //   );
      //   //   await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      //   //   //   await MediaLibrary.createAssetAsync(uri);
      //   // }
      //   await Sharing.shareAsync(uri);
      // }
    } catch (error) {
      console.error(error);
    }
  };
  // end
  //   const openpdf = async (html) =>{
  //     const { uri } = await Print.printToFileAsync({ html });
  // FileViewer.open(uri)
  // .then(() => {
  //     alert(done)
  // })
  // .catch(error => {
  //     // error
  // });
  // // console.log(path);
  //   };
  return (
    <View>
      {orderStatus=="true" ?
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log(brandName)}
      >
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Car</Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>
            <View>
              <Text style={{ color: "gray", width: 95 }}>{`${brandName} ${modelName} ${fuelType}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Service Date</Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>       
            <View>
              <Text style={{ color: "gray", width: 95 }}>{serdate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Service Type</Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>
            <View style={{ width:70 }}>
              <Text style={{ color: "gray" }}>{sertyp}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Invoice Amount</Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>
            <View>
              <Text style={{ color: "gray" }}>INR {invoiceamount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Odometer Reading</Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>
            <View>
              <Text style={{ color: "gray" }}>{odometerReading}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: "bold" }}>Dealer Name </Text>
          <View style={{ flexDirection: "row", width: "40%" }}>
            <Text style={{ marginHorizontal: 10 }}>:</Text>
            <View>
              <Text style={{ color: "gray" }}>{dealerName}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => createAndSavePDF(html)}
            onPress={() => share(invoicePDF)}
          >
            <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>
              Share Invoice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OpenAnything.Pdf(`${invoicePDF}`)}
          >
            <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>
              Open Invoice
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      :
      <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(brandName)}
    >
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>Car</Text>
        <View style={{ flexDirection: "row", width: "40%" }}>
          <Text style={{ marginHorizontal: 10 }}>:</Text>
          <View>
            <Text style={{ color: "gray", width: 95 }}>{`${brandName} ${modelName} ${fuelType}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>Order Date</Text>
        <View style={{ flexDirection: "row", width: "40%" }}>
          <Text style={{ marginHorizontal: 10 }}>:</Text>
          <View>
            <Text style={{ color: "gray", width: 95 }}>{createDate}</Text>
            {/* <Text style={{ color: "gray", width: 95 }}>{serdate}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>Pick Up Date</Text>
        <View style={{ flexDirection: "row", width: "40%" }}>
          <Text style={{ marginHorizontal: 10 }}>:</Text>
          <View style={{ width:70 }}>
            <Text style={{ color: "gray", width: 95 }}>{pickUpDate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>Pick Up Time</Text>
        <View style={{ flexDirection: "row", width: "40%" }}>
          <Text style={{ marginHorizontal: 10 }}>:</Text>
          <View>
            <Text style={{ color: "gray", width: 98 }}>{pickUpSlot}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>We will update invoice and other details after car get serviced </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => createAndSavePDF(html)}
          // onPress={() => share(invoicePDF)}
        >
          <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>
            Share Invoice
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => OpenAnything.Pdf(`${invoicePDF}`)}
        >
          <Text style={{ color: "white", fontSize: 12, alignSelf: "center" }}>
            Open Invoice
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>}
    </View>
  );
};

export default Historycard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 7,
    elevation: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#ff8127",
    width: "40%",
    borderRadius: 10,
  },
});
