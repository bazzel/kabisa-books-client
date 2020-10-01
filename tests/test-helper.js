import Application from 'kabisa-books-client/app';
import config from 'kabisa-books-client/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
