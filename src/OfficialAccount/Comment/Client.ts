'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  async open(msg_data_id: string, index: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/open', {
      json: true,
      body: {
        msg_data_id,
        index,
      }
    });
  }

  async close(msg_data_id: string, index: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/close', {
      json: true,
      body: {
        msg_data_id,
        index,
      }
    });
  }

  async list(msg_data_id: string, index: number, begin: number, count: number, type: number = 0): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/list', {
      json: true,
      body: {
        msg_data_id,
        index,
        begin,
        count,
        type,
      }
    });
  }

  async markElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/markelect', {
      json: true,
      body: {
        msg_data_id,
        index,
        user_comment_id,
      }
    });
  }

  async unmarkElect(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/unmarkelect', {
      json: true,
      body: {
        msg_data_id,
        index,
        user_comment_id,
      }
    });
  }

  async delete(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/delete', {
      json: true,
      body: {
        msg_data_id,
        index,
        user_comment_id,
      }
    });
  }

  async reply(msg_data_id: string, index: number, user_comment_id: number, content: string): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/reply/add', {
      json: true,
      body: {
        msg_data_id,
        index,
        user_comment_id,
        content,
      }
    });
  }

  async deleteReply(msg_data_id: string, index: number, user_comment_id: number): Promise<any>
  {
    return await this.httpPost('cgi-bin/comment/reply/delete', {
      json: true,
      body: {
        msg_data_id,
        index,
        user_comment_id,
      }
    });
  }

}