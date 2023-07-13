"use client";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

function provider({ children }) {
  return (
    <Auth0Provider
      domain="fuji-bank.uk.auth0.com"
      clientId="4JZXCbJ9ilw9KLznMWFiRj9AjKl86Suo"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default provider;
