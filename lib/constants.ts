/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://demo.vercel.events';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const BRAND_NAME = 'ACME';
export const SITE_NAME_MULTILINE = ['ACME', 'Conf'];
export const SITE_NAME = 'ACME Bank';
export const META_DESCRIPTION =
  'This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = '01 January 2022';
export const SHORT_DATE = 'Jan 1 - 9:00am PST';
export const FULL_DATE = 'Jan 1st 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const REPO = 'https://github.com/anthonyjdella/tbd-issue-credential';
export const TBD_BLOG =
  'https://developer.tbd.website/docs/tutorials/issue-verifiable-credential-manually/';
export const SAMPLE_TICKET_NUMBER = '1234';
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/'
  }
];

export type TicketGenerationState = 'default' | 'loading';
