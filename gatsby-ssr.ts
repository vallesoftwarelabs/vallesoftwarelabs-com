import React from "react";
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes, pathname }, pluginOptions) => {
    setHtmlAttributes({ lang: "en" });
    setBodyAttributes({ className: "my-body-class" });
};

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheet = new ServerStyleSheet();
    const bodyHTML = renderToString(sheet.collectStyles(bodyComponent));
    replaceBodyHTMLString(bodyHTML);
    setHeadComponents([sheet.getStyleElement()]);
};