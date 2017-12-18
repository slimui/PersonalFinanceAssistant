import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import { DrawerIcon } from 'src/components';
import { colors } from 'src/styles'
import AccountsNavigator from '../AccountsNavigator';
import CategoriesNavigator from '../CategoriesNavigator';
import SettingsNavigator from '../SettingsNavigator';
import Transactions from '../TransactionsNavigator';
import AboutNavigator from '../AboutNavigator';
import TransactionsNavigator from '../TransactionsNavigator/TransactionsNavigator';
import TrendsNavigator from '../TrendsNavigator';
import CurrencyNavigator from '../CurrencyNavigator';

export default DrawerNavigator({
    Transactions: {
        screen: TransactionsNavigator,
        navigationOptions: {
            drawerLabel: 'Transactions',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="swap-horiz" tintColor={tintColor} />
        }
    },
    Accounts: {
        screen: AccountsNavigator,
        navigationOptions: {
            drawerLabel: 'Accounts',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="credit-card" tintColor={tintColor} />

        }
    },
    Categories: {
        screen: CategoriesNavigator,
        navigationOptions: {
            drawerLabel: 'Categories',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="sort" tintColor={tintColor} />
        }
    },
    Trends: {
        screen: TrendsNavigator,
        title: 'Trends',
        navigationOptions: {
            drawerLabel: 'Trends',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="info" tintColor={tintColor} />
        }
    },
    Currency: {
        screen: CurrencyNavigator,
        title: 'Exchange rates',
        navigationOptions: {
            drawerLabel: 'Exchange rates',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="credit-card" tintColor={tintColor} />
        }
    },
    About: {
        screen: AboutNavigator,
        title: 'About',
        navigationOptions: {
            drawerLabel: 'About',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="info" tintColor={tintColor} />
        }
    },
    Settings: {
        screen: SettingsNavigator,
        title: 'Settings',
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: ({ tintColor }) =>
                <DrawerIcon name="settings" tintColor={tintColor} />
        }
    }
}, {
    initialRouteName: 'Transactions',
    contentOptions: {
        activeTintColor: colors.COLOR_PRIMARY,
    }
});
