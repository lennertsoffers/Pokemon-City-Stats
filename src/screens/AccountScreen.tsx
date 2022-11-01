import React from "react";
import ScreenContent from "../components/content/ScreenContent";
import Account from "../components/users/Account";

/**
 * Screen holding the account information
 */
const AccountScreen = () => {
    return (
        <ScreenContent title="Account">
            <Account />
        </ScreenContent>
    );
};

export default AccountScreen;
