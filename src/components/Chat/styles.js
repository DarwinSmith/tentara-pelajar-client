import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "chat": {
        "overflowY": "scroll",
        "overflowX": "hidden",
        "height": 450,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "chat-page": {
        "backgroundColor": "#ECF0F1",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "textRendering": "optimizeLegibility",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontWeight": "400",
        "backgroundSize": "cover",
        "width": "100%",
        "height": 800
    },
    "wrapper": {
        "position": "relative",
        "marginTop": 50,
        "left": "50%",
        "width": 1000,
        "height": 600,
        "MozTransform": "translate(-50%, 0)",
        "MsTransform": "translate(-50%, 0)",
        "WebkitTransform": "translate(-50%, 0)",
        "transform": "translate(-50%, 0)"
    },
    "kotak": {
        "position": "relative",
        "top": "50%",
        "left": "50%",
        "width": "80%",
        "height": "95%",
        "backgroundColor": "#fff",
        "MozTransform": "translate(-50%, -50%)",
        "MsTransform": "translate(-50%, -50%)",
        "WebkitTransform": "translate(-50%, -50%)",
        "transform": "translate(-50%, -50%)"
    },
    "kotak left": {
        "float": "left",
        "width": "37.6%",
        "height": "100%",
        "border": "1px solid #e6e6e6",
        "backgroundColor": "#fff"
    },
    "kotak left top": {
        "position": "relative",
        "width": "100%",
        "height": 96,
        "paddingTop": 29,
        "paddingRight": 29,
        "paddingBottom": 29,
        "paddingLeft": 29
    },
    "kotak left top:after": {
        "position": "absolute",
        "bottom": 0,
        "left": "50%",
        "display": "block",
        "width": "80%",
        "height": 1,
        "content": "''",
        "backgroundColor": "#e6e6e6",
        "MozTransform": "translate(-50%, 0)",
        "MsTransform": "translate(-50%, 0)",
        "WebkitTransform": "translate(-50%, 0)",
        "transform": "translate(-50%, 0)"
    },
    "kotak left input": {
        "float": "left",
        "width": 188,
        "height": 42,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "border": "1px solid #e6e6e6",
        "backgroundColor": "#eceff1",
        "MozBorderRadius": 21,
        "WebkitBorderRadius": 21,
        "borderRadius": 21,
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontWeight": "400"
    },
    "kotak left input:focus": {
        "outline": "none"
    },
    "kotak left asearch": {
        "display": "block",
        "float": "left",
        "width": 42,
        "height": 42,
        "marginLeft": 10,
        "border": "1px solid #e6e6e6",
        "backgroundColor": "#00b0ff",
        "backgroundImage": "url(\"http://s11.postimg.org/dpuahewmn/name_type.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "top 12px left 14px",
        "MozBorderRadius": "50%",
        "WebkitBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "kotak left people": {
        "marginLeft": -1,
        "borderRight": "1px solid #e6e6e6",
        "borderLeft": "1px solid #e6e6e6",
        "width": "calc(100% + 2px)"
    },
    "kotak left people person": {
        "position": "relative",
        "width": "100%",
        "paddingTop": 12,
        "paddingRight": "10%",
        "paddingBottom": 16,
        "paddingLeft": "10%",
        "cursor": "pointer",
        "backgroundColor": "#fff"
    },
    "kotak left people person:after": {
        "position": "absolute",
        "bottom": 0,
        "left": "50%",
        "display": "block",
        "width": "80%",
        "height": 1,
        "content": "''",
        "backgroundColor": "#e6e6e6",
        "MozTransform": "translate(-50%, 0)",
        "MsTransform": "translate(-50%, 0)",
        "WebkitTransform": "translate(-50%, 0)",
        "transform": "translate(-50%, 0)"
    },
    "kotak left people person img": {
        "float": "left",
        "width": 40,
        "height": 40,
        "marginRight": 12,
        "MozBorderRadius": "50%",
        "WebkitBorderRadius": "50%",
        "borderRadius": "50%"
    },
    "kotak left people person name": {
        "fontSize": 14,
        "lineHeight": 22,
        "color": "#1a1a1a",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontWeight": "600"
    },
    "kotak left people person time": {
        "fontSize": 14,
        "position": "absolute",
        "top": 16,
        "right": "10%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "color": "#999",
        "backgroundColor": "#fff"
    },
    "kotak left people person preview": {
        "fontSize": 14,
        "display": "inline-block",
        "overflow": "hidden !important",
        "width": "70%",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "color": "#999"
    },
    "kotak left people personactive": {
        "marginTop": -1,
        "marginLeft": -1,
        "paddingTop": 13,
        "border": 0,
        "backgroundColor": "#00b0ff",
        "width": "calc(100% + 2px)",
        "paddingLeft": "calc(10% + 1px)"
    },
    "kotak left people person:hover": {
        "marginTop": -1,
        "marginLeft": -1,
        "paddingTop": 13,
        "border": 0,
        "backgroundColor": "#00b0ff",
        "width": "calc(100% + 2px)",
        "paddingLeft": "calc(10% + 1px)"
    },
    "kotak left people personactive span": {
        "color": "#fff",
        "background": "transparent"
    },
    "kotak left people person:hover span": {
        "color": "#fff",
        "background": "transparent"
    },
    "kotak left people personactive:after": {
        "display": "none"
    },
    "kotak left people person:hover:after": {
        "display": "none"
    },
    "kotak right": {
        "position": "relative",
        "float": "left",
        "width": "62.4%",
        "height": "100%"
    },
    "kotak right top": {
        "width": "100%",
        "height": 47,
        "paddingTop": 15,
        "paddingRight": 29,
        "paddingBottom": 15,
        "paddingLeft": 29,
        "backgroundColor": "#ffffff"
    },
    "kotak right top span": {
        "fontSize": 15,
        "color": "#999"
    },
    "kotak right top span name": {
        "color": "#1a1a1a",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontWeight": "600"
    },
    "kotak right kotak": {
        "position": "relative",
        "display": "none",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 35,
        "paddingBottom": 92,
        "paddingLeft": 35,
        "borderWidth": "1px 1px 1px 0",
        "borderStyle": "solid",
        "borderColor": "#e6e6e6",
        "height": "calc(100% - 48px)",
        "WebkitJustifyContent": "flex-end",
        "justifyContent": "flex-end",
        "WebkitFlexDirection": "column",
        "flexDirection": "column"
    },
    "kotak right kotakactive-kotak": {
        "display": "flex"
    },
    "kotak right kotakactive-kotak bubble": {
        "MozTransitionTimingFunction": "cubic-bezier(0.4, -0.04, 1, 1)",
        "OTransitionTimingFunction": "cubic-bezier(0.4, -0.04, 1, 1)",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.4, -0.04, 1, 1)",
        "transitionTimingFunction": "cubic-bezier(0.4, -0.04, 1, 1)"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(1)": {
        "MozAnimationDuration": "0.15s",
        "WebkitAnimationDuration": "0.15s",
        "animationDuration": "0.15s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(2)": {
        "MozAnimationDuration": "0.3s",
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(3)": {
        "MozAnimationDuration": "0.45s",
        "WebkitAnimationDuration": "0.45s",
        "animationDuration": "0.45s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(4)": {
        "MozAnimationDuration": "0.6s",
        "WebkitAnimationDuration": "0.6s",
        "animationDuration": "0.6s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(5)": {
        "MozAnimationDuration": "0.75s",
        "WebkitAnimationDuration": "0.75s",
        "animationDuration": "0.75s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(6)": {
        "MozAnimationDuration": "0.9s",
        "WebkitAnimationDuration": "0.9s",
        "animationDuration": "0.9s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(7)": {
        "MozAnimationDuration": "1.05s",
        "WebkitAnimationDuration": "1.05s",
        "animationDuration": "1.05s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(8)": {
        "MozAnimationDuration": "1.2s",
        "WebkitAnimationDuration": "1.2s",
        "animationDuration": "1.2s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(9)": {
        "MozAnimationDuration": "1.35s",
        "WebkitAnimationDuration": "1.35s",
        "animationDuration": "1.35s"
    },
    "kotak right kotakactive-kotak bubble:nth-of-type(10)": {
        "MozAnimationDuration": "1.5s",
        "WebkitAnimationDuration": "1.5s",
        "animationDuration": "1.5s"
    },
    "kotak right write": {
        "position": "absolute",
        "bottom": 29,
        "left": 30,
        "height": 42,
        "paddingLeft": 8,
        "border": "1px solid #e6e6e6",
        "backgroundColor": "#eceff1",
        "width": "calc(100% - 58px)",
        "MozBorderRadius": 5,
        "WebkitBorderRadius": 5,
        "borderRadius": 5
    },
    "kotak right write input": {
        "fontSize": 16,
        "float": "left",
        "width": 380,
        "height": 40,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "color": "#1a1a1a",
        "border": 0,
        "outline": "none",
        "backgroundColor": "#eceff1",
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontWeight": "400"
    },
    "kotak right write write-linkattach:before": {
        "display": "inline-block",
        "float": "left",
        "width": 20,
        "height": 42,
        "content": "''",
        "backgroundImage": "url(\"http://s1.postimg.org/s5gfy283f/attachemnt.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center"
    },
    "kotak right write write-linksmiley:before": {
        "display": "inline-block",
        "float": "left",
        "width": 20,
        "height": 42,
        "content": "''",
        "backgroundImage": "url(\"http://s14.postimg.org/q2ug83h7h/smiley.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center"
    },
    "kotak right write write-linksend:before": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "kotak right bubble": {
        "fontSize": 16,
        "position": "relative",
        "display": "inline-block",
        "clear": "both",
        "marginBottom": 8,
        "paddingTop": 13,
        "paddingRight": 14,
        "paddingBottom": 13,
        "paddingLeft": 14,
        "verticalAlign": "top",
        "MozBorderRadius": 5,
        "WebkitBorderRadius": 5,
        "borderRadius": 5
    },
    "kotak right bubble:before": {
        "position": "absolute",
        "top": 19,
        "display": "block",
        "width": 8,
        "height": 6,
        "content": "'\\00a0'",
        "MozTransform": "rotate(29deg) skew(-35deg)",
        "MsTransform": "rotate(29deg) skew(-35deg)",
        "WebkitTransform": "rotate(29deg) skew(-35deg)",
        "transform": "rotate(29deg) skew(-35deg)"
    },
    "kotak right bubbleyou": {
        "float": "left",
        "color": "#fff",
        "backgroundColor": "#00b0ff",
        "WebkitAlignSelf": "flex-start",
        "alignSelf": "flex-start",
        "MozAnimationName": "slideFromLeft",
        "WebkitAnimationName": "slideFromLeft",
        "animationName": "slideFromLeft"
    },
    "kotak right bubbleyou:before": {
        "left": -3,
        "backgroundColor": "#00b0ff"
    },
    "kotak right bubbleme": {
        "float": "right",
        "color": "#1a1a1a",
        "backgroundColor": "#eceff1",
        "WebkitAlignSelf": "flex-end",
        "alignSelf": "flex-end",
        "MozAnimationName": "slideFromRight",
        "WebkitAnimationName": "slideFromRight",
        "animationName": "slideFromRight"
    },
    "kotak right bubbleme:before": {
        "right": -3,
        "backgroundColor": "#eceff1"
    },
    "kotak right conversation-start": {
        "position": "relative",
        "width": "100%",
        "marginBottom": 27,
        "textAlign": "center"
    },
    "kotak right conversation-start span": {
        "fontSize": 14,
        "display": "inline-block",
        "color": "#999"
    },
    "kotak right conversation-start span:before": {
        "position": "absolute",
        "top": 10,
        "display": "inline-block",
        "width": "30%",
        "height": 1,
        "content": "''",
        "backgroundColor": "#e6e6e6",
        "left": 0
    },
    "kotak right conversation-start span:after": {
        "position": "absolute",
        "top": 10,
        "display": "inline-block",
        "width": "30%",
        "height": 1,
        "content": "''",
        "backgroundColor": "#e6e6e6",
        "right": 0
    },
    "credits": {
        "color": "white",
        "fontSize": 11,
        "position": "absolute",
        "bottom": 10,
        "right": 15
    },
    "credits a": {
        "color": "white",
        "textDecoration": "none"
    }
});