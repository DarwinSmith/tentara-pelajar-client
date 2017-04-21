import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "dashboards-box": {
        "marginTop": 40,
        "backgroundColor": "#ECF0F1"
    },
    "sma-color": {
        "background": "#415973",
        "color": "#fff"
    },
    "smp-color": {
        "background": "#204270",
        "color": "#fff"
    },
    "sd-color": {
        "background": "#8A0F12",
        "color": "#fff"
    },
    "posting-pictures-container": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "overflowX": "scroll"
    },
    "posting-pictures-container img": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "post-media-container": {
        "display": "flex",
        "overflowX": "scroll"
    },
    "post-media-container img": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "width": "100%",
        "height": 400
    },
    "postCommentsContainer": {
        "background": "#0BCBD6"
    },
    "commentItem": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "background": "#dad7d6"
    },
    "small-text": {
        "fontSize": 12
    },
    "index-dashboard": {
        "marginTop": 0
    },
    "left-sidebar-container": {
        "position": "relative",
        "textAlign": "center"
    },
    "left-sidebar-card": {
        "color": "#fff",
        "textAlign": "center"
    },
    "friend-suggestion-card": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "height": 100,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "justifyContent": "space-between"
    },
    "friend-suggestion-card img": {
        "borderRadius": "100%",
        "width": 50,
        "height": 50
    },
    "postLeave": {
        "outline": "none",
        "background": "#fff",
        "border": "none",
        "width": "100%",
        "color": "#ccc",
        "resize": "none",
        "fontSize": 14
    },
    "postAppear": {
        "fontSize": 16,
        "outline": "none",
        "background": "#fff",
        "border": "none",
        "width": "100%",
        "height": 200,
        "transition": "width 2s, height 2s",
        "resize": "none"
    },
    "post-options": {
        "display": "flex",
        "justifyContent": "space-between"
    },
    "right-sidebar": {
        "background": "#0BCBD6",
        "color": "#fff",
        "textAlign": "center",
        "marginTop": 20
    },
    "trigger-sharing-text": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "left",
        "cursor": "default"
    },
    "griddify": {
        "marginRight": 10
    },
    "timeline": {
        "marginTop": 10
    },
    "reaction": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "reactions i": {
        "textAlign": "left",
        "fontSize": 28
    },
    "profile-banner": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "profile-banner-pic": {
        "borderRadius": "100%",
        "height": 80,
        "width": 80
    },
    "dashboards-enter": {
        "width": 0,
        "height": 0
    },
    "dashboards-enterdashboards-enter-active": {
        "width": "100%",
        "height": 200,
        "transition": "width 500ms ease-in, height 500ms ease-in"
    },
    "dashboards-leave": {
        "opacity": 1
    },
    "dashboards-leavedashboards-leave-active": {
        "width": 0,
        "height": 0,
        "transition": "width 500ms ease-in, height 500ms ease-out"
    },
    "dashboards-appear": {
        "opacity": 0.01
    },
    "dashboards-appeardashboards-appear-active": {
        "opacity": 1,
        "transition": "opacity 1s ease-in"
    },
    "round-image": {
        "borderRadius": "100%"
    }
});