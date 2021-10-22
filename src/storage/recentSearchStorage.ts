import WebStorage from './webStorage';

const STORAGE_KEY = 'recent-search-keywords';

type RecentSearchKeywords = string[];

class RecentSearchStorage extends WebStorage<RecentSearchKeywords> {}

export default new RecentSearchStorage(STORAGE_KEY, localStorage);
