import { AppButton } from "./AppButton";
import commonStyle from "../../style/common.style";

export const SecondaryButton = (props) => {
    return (
        <AppButton 
        onPress={props.onPress}
        loading={props.loading}
        buttonText={props.buttonText}
        buttonStyles={commonStyle.secondaryBtn}
        textStyles={commonStyle.primaryTextColor}
        />
    );
}