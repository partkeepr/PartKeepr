/**
 * Returns an internationalized string.
 * @param string
 * @return {*}
 */

function i18n (string) {
	if(string in translation)
	{
		return translation[string];
	}
	else
	{
		return string;
	}
	
}
