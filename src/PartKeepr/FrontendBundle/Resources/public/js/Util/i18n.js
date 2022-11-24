/**
 * Returns an internationalized string.
 * @param string
 * @return {*}
 */

import translation from "./translation.json" assert {type: 'json'}

function i18n (string) {
	if(string in translation.translation)
	{
		return translation.translation[string];
	}
	else
	{
		return string;
	}
	
}
