import React from "react";

const POSSystem= () => {
    const styles={"wrapper":{"display":"flex","fontSize":"small"},"leftBox":{"width":"40%","backgroundColor":"rgba(238,239,241,255)","marginRight":"0.2%"},"rightBox":{"width":"60%","backgroundColor":"rgba(238,239,241,255)"}};
    return(
        <div style={styles.wrapper}>
            <div style={styles.leftBox}>
                <div style={styles.wrapper}>
                    <div style={{"width":"30%","textAlign":"center"}}>Product</div>
                    <div style={{"width":"20%","textAlign":"right"}}>Price</div>
                    <div style={{"width":"30%","textAlign":"center"}}>Quantity</div>
                    <div style={{"width":"15%","textAlign":"right"}}>Total</div>
                </div>
                <div style={{"margin":"3%","textAlign":"center","width":"93%","backgroundColor":"white","fontSize":"large","padding":"8% 0"}}>
                    THERE ARE NO PRODUCTS 
                </div>
                <div>
                </div>
            </div>
            <div style={styles.rightBox}>hi2</div>
        </div>
    )
};

export default POSSystem;