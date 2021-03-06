/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, moz:true, indent:4, maxerr:50, globalstrict: true */
/*global require: false, exports: false */

/*
 * Copyright (C) 2014  Boucher, Antoni <bouanto@gmail.com>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const { get, reset } = require('sdk/preferences/service'),
    self = require('sdk/self'),
    simplePrefs = require('sdk/simple-prefs'),
    prefs = simplePrefs.prefs;

/**
 * Get the option long name from the `shortName`.
 * @param {string} The short name.
 * @return {string} The long name.
 */
function getOptionName(shortName) {
    return 'extensions.' + self.id + '.' + shortName;
}

/**
 * Set the `maximum` of the `preference`.
 * @param {string} The preference name.
 * @param {integer} The maximum.
 */
function setPreferenceMaximum(preference, maximum) {
    simplePrefs.on(preference, function() {
        if(prefs[preference] > maximum) {
            prefs[preference] = maximum;
        }
    });
}

/**
 * Set the `minimum` of the `preference`.
 * @param {string} The preference name.
 * @param {integer} The minimum.
 */
function setPreferenceMinimum(preference, minimum) {
    simplePrefs.on(preference, function() {
        if(prefs[preference] < minimum) {
            prefs[preference] = minimum;
        }
    });
}

exports.getOptionName = getOptionName;
exports.setPreferenceMaximum = setPreferenceMaximum;
exports.setPreferenceMinimum = setPreferenceMinimum;
