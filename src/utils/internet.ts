import { addEventListener, fetch } from '@react-native-community/netinfo';

async function internet() {
    const { isConnected, type } = await fetch();
    return { isConnected, type };
}
// Subscribe
const unsubscribe = addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
});

// Unsubscribe
unsubscribe();

export default internet;
