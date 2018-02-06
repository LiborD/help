/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
    {
        caption: 'User1',
        image: '/test-site/img/docusaurus.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
    },
];

const siteConfig = {
    title: 'Help center' /* title for your website */,
    tagline: 'A website for testing',
    url: 'http://help.bulkgate.com' /* your website url */,
    baseUrl: '/' /* base url for your project */,
    projectName: 'test-site',
    headerLinks: [
        {page : "index", label:"Home"},
        {doc: 'dashboard', label: 'How to use BulkGate'},
        {doc: 'create-account', label: 'Account management'},
        {page: 'help', label: 'Privacy and security'},
        {languages: true}
        //{blog: true, label: 'Blog'},
    ],
    users,
    /* path to images for header/footer */
    headerIcon: 'img/docusaurus.svg',
    footerIcon: 'img/docusaurus.svg',
    favicon: 'img/favicon.png',
    /* colors for website */
    colors: {
        primaryColor: '#00a79d',
        secondaryColor: '#be2166',
    },
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
    // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
    // projectName: 'test-site', // or set an env variable PROJECT_NAME
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default',
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;