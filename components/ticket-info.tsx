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

import styles from './ticket-info.module.css';
import styleUtils from './utils.module.css';
import Logo from './logo';
import { DATE, SITE_URL } from '@lib/constants';
import VercelLogo from '@components/icons/icon-platform';

const siteUrl = new URL(SITE_URL);
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(/\/$/, '');

type Props = {
  did?: string;
  name?: string;
}

export default function TicketInfo({ did, name }: Props) {
  const createdBy = (
    <div className={styles['created-by']}>
      <div className={styles['created-by-text']}>Created by ACME</div>
    </div>
  );
  return (
    <div className={styles.info}>
      {/* <div className={styles.logo}>
        <Logo textSecondaryColor={logoTextSecondaryColor} />
      </div> */}
      <div>{name}</div>
      <div className={styles.date}>
        <div>{did}</div>
      </div>
      <div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
      <div className={styleUtils['show-on-mobile']}>{createdBy}</div>
    </div>
  );
}
