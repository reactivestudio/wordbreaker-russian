'use strict';

const chai                    = require('chai'),
      ifVowelWithNextKratkaya = require('./../../rules/if-vowel-with-next-kratkaya');

describe(
  'ifVowelWithNextKratkaya', () => {

    it(
      'Это функция', () => {
        chai.assert.isFunction(ifVowelWithNextKratkaya);
      }
    );

    describe(
      'Правильно работает', () => {

        it(
          'война', () => {
            const word   = 'война'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result  : false,
                    },
                    {
                      position: 1,
                      result  : true,
                    },
                    {
                      position: 2,
                      result  : false,
                    },
                    {
                      position: 3,
                      result  : false,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifVowelWithNextKratkaya(
                    input.position,
                    word
                  ),
                  input.result
                );
              }
            );
          }
        );

        it(
          'стойкий', () => {
            const word   = 'стойкий'.split(''),
                  inputs = [
                    {
                      position: 0,
                      result  : false,
                    },
                    {
                      position: 1,
                      result  : false,
                    },
                    {
                      position: 2,
                      result  : true,
                    },
                    {
                      position: 3,
                      result  : false,
                    },
                    {
                      position: 4,
                      result  : false,
                    },
                    {
                      position: 5,
                      result  : true,
                    },
                  ];

            inputs.forEach(
              input => {
                chai.assert.equal(
                  ifVowelWithNextKratkaya(
                    input.position,
                    word
                  ),
                  input.result
                );
              }
            );
          }
        );

      }
    );

  }
);
