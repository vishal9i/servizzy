// const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

//   const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
//     'Wait, we are fetching you location...'
//   );

//   useEffect(() => {
//     CheckIfLocationEnabled();
//     GetCurrentLocation();
//   }, []);

//   const CheckIfLocationEnabled = async () => {
//     let enabled = await Location.hasServicesEnabledAsync();

//     if (!enabled) {
//       Alert.alert(
//         'Location Service not enabled',
//         'Please enable your location services to continue',
//         [{ text: 'OK' }],
//         { cancelable: false }
//       );
//     } else {
//       setLocationServiceEnabled(enabled);
//     }
//   };

//   const GetCurrentLocation = async () => {
//     let { status } = await Location.requestPermissionsAsync();

//     if (status !== 'granted') {
//       Alert.alert(
//         'Permission not granted',
//         'Allow the app to use location service.',
//         [{ text: 'OK' }],
//         { cancelable: false }
//       );
//     }

//     let { coords } = await Location.getCurrentPositionAsync();

//     if (coords) {
//       const { latitude, longitude } = coords;
//       let response = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude
//       });

//       for (let item of response) {
//         // console.log(item)
//         let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

//         setDisplayCurrentAddress(address);

//         if (address.length > 0) {
//           setTimeout(() => {
//             navigation.navigate('Home', { item: address });
//           }, 2000);
//         }
//       }
//     }
//   };