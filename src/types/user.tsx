import React from "react";

export interface User {
  createdAt: string;
  email: string;
  emailVerified: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  localId: string;
  passwordHash: string;
  passwordUpdatedAt: 1650861961922;
  providerUserInfo: object[];
  validSince: string;
}
