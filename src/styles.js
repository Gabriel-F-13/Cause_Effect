import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#de1e',
      alignItems: 'center',
    },
    
    titleContainer: {  
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 40
    },

    title: {
      fontSize: 22,
      fontWeight: '800',
      width: 330,
      backgroundColor: '#fff',
      textAlign: 'center',
      borderRadius: 8
    },
  
    loginMsg:(text = 'none') => ({
        display: text,
        marginBottom: 40
    }),

    msg: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        textAlign: 'justify'
    }

});