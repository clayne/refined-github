import './hide-newsfeed-noise.css';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager.js';

void features.addCssFeature(import.meta.url, [pageDetect.isDashboard]);

/*
Test URLs:

- https://github.com/
- https://github.com/orgs/refined-github/dashboard

*/
