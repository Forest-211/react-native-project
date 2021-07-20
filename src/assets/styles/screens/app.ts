import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        zIndex: 999,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 15,
        color: '#fff',
    },
});

export default appStyles;
