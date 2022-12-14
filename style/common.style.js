import { StyleSheet } from "react-native";

const bodyTypeSize = 18;
const inputPadding = bodyTypeSize * 0.8;
const btnHorizontalPad = bodyTypeSize * 1.33;
const mainColor = "#297bff";
const semiBoldText = "600";

export default StyleSheet.create({
    primaryTextColor: {
        color: mainColor
    },
    bodyFontSize: {
        fontSize: bodyTypeSize
    },
    inputPadding: {
        paddingVertical: inputPadding,
        paddingHorizontal: inputPadding
    },
    elementWidth: {
        width: 270
    },
    semiBoldWeight: {
        fontWeight: semiBoldText
    },
    
    h1Text: {
        fontSize: 37.32,
    },
    h2Text: {
        fontSize: 31.10 
    },
    inputLabel: {
        fontSize: bodyTypeSize,
        fontWeight: semiBoldText
    },

    form: {
        display: "flex",
        alignItems: "center", 
        marginTop: 50
    },

    btn: {
        paddingVertical: bodyTypeSize,
        paddingHorizontal: btnHorizontalPad,
        display: "flex",
        alignItems: "center",
        borderRadius: 4,
        minWidth: "100%"
    },
    primaryBtn: {
        backgroundColor: mainColor,
        marginBottom: 15,
    },
    secondaryBtn: {
        backgroundColor: "transparent", 
        borderColor: mainColor, 
        borderWidth: 1,
        marginTop: 10
    },
    buttonLabel: {
        fontSize: bodyTypeSize * 1.2,
        fontWeight: semiBoldText,
    },
    whiteText: {
        color: "white"
    },
    input: {
        fontSize: bodyTypeSize,
        marginTop: 5,
        paddingVertical: inputPadding,
        paddingHorizontal: inputPadding,
        minWidth: "100%",
        borderColor: '#728096',
        borderWidth: 1,
        borderRadius: 3
    }
});

