import {$optional} from 'select-dom/strict.js';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager.js';

function init(): void {
	// TODO: Drop feature in January 2025
	$optional('.subnav-search')?.setAttribute('autocomplete', 'off');
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isIssueOrPRList,
	],
	exclude: [
		pageDetect.isMilestone,
	],
	awaitDomReady: true, // Not urgent
	init,
});

/*

Test URLs:

https://github.com/refined-github/refined-github/issues
https://github.com/refined-github/refined-github/pulls

*/
