/////Using this file because, for some reason react native failed to read my .env file entries

import { Dimensions, Platform, StyleSheet, Text } from "react-native";
//////Use This File To Keep URLS and other data

export function ValidateEmail(inputText) {
    var mailformat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputText.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

export function formatNumber(number, noZeros) {
    let formattedValue = (number / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formattedValue = formattedValue.includes(".")
        ? formattedValue
        : noZeros === undefined
        ? formattedValue + ".00"
        : formattedValue;
    return formattedValue;
}

export function formatInput(number, noZeros) {
    let formattedValue;
    !noZeros ? (number = number / 100) : (number = number); ///we are using kobo for cudium hence the divison
    let value = number
        .toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formattedValue = !noZeros
        ? value + "." + number.toString().substr(number.toString().length - 2) ////getting last numbers(the kobo) and displaying them after a "."
        : value;
    // console.log(formattedValue);
    return formattedValue;
} ////This Whole Function Is Wrong Because of the noZeros value check :D..will come back to it later

export function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) < 2
            ? Math.floor(interval) + " year"
            : Math.floor(interval) + "years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) < 2
            ? Math.floor(interval) + " month"
            : Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) < 2
            ? Math.floor(interval) + " day"
            : Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) < 2
            ? Math.floor(interval) + " hour"
            : Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) < 2
            ? Math.floor(interval) + " minute"
            : Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) < 2
        ? "less than a minute"
        : "less than a minute";
}

