// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
//  - Part 2
test('inputs a correct phone number (631) 123-6323 to equal true', () => {
    expect(functions.isPhoneNumber("(631) 123-6323")).toBe(true);
  });
test('inputs a correct phone number (561) 568-6515 to equal true', () => {
    expect(functions.isPhoneNumber("(561) 568-6515")).toBe(true);
  });
test('inputs an incorrect phone number 1567 to equal false', () => {
    expect(functions.isPhoneNumber('1567')).toBe(false);
  });
test('inputs an incorrect phone number 12421 to equal false', () => {
    expect(functions.isPhoneNumber('12421')).toBe(false);
  });

  test('inputs a correct email jack@gmail.com to equal true', () => {
    expect(functions.isEmail("jack@gmail.com")).toBe(true);
  });
  test('inputs a correct email jack123@gmail.com to equal true', () => {
    expect(functions.isEmail("jack123@gmail.com")).toBe(true);
  });
  test('inputs an icorrect email jackgmail.com to equal false', () => {
    expect(functions.isEmail("jackgmail.com")).toBe(false);
  });
  test('inputs an icorrect email 123gmail to equal false', () => {
    expect(functions.isEmail("123gmail")).toBe(false);
  });

  test('inputs a strong password jack12345g to equal true', () => {
    expect(functions.isStrongPassword("jack12345g")).toBe(true);
  });
  test('inputs a strong password j125g to equal true', () => {
    expect(functions.isStrongPassword("j125g")).toBe(true);
  });
  test('inputs a non strong password 125 to equal false', () => {
    expect(functions.isStrongPassword("125")).toBe(false);
  });
  test('inputs a non strong password a1 to equal false', () => {
    expect(functions.isStrongPassword("a1")).toBe(false);
  });

  test('inputs a correct date 11/18/2022 to equal true', () => {
    expect(functions.isDate("11/18/2022")).toBe(true);
  });
  test('inputs a correct date 11/01/2022 to equal true', () => {
    expect(functions.isDate("11/01/2022")).toBe(true);
  });
  test('inputs an incorrect date 011/18/2022 to equal false', () => {
    expect(functions.isDate("011/18/2022")).toBe(false);
  });
  test('inputs an incorrect date /18/2022 to equal false', () => {
    expect(functions.isDate("/18/2022")).toBe(false);
  });

  test('inputs a correct hex color #224f99 to equal true', () => {
    expect(functions.isHexColor("#224f99")).toBe(true);
  });
  test('inputs a correct hex color #fff to equal true', () => {
    expect(functions.isHexColor("#fff")).toBe(true);
  });
  test('inputs an incorrect hex color #fffi to equal false', () => {
    expect(functions.isHexColor("#fffi")).toBe(false);
  });
  test('inputs an incorrect hex color #t to equal false', () => {
    expect(functions.isHexColor("#t")).toBe(false);
  });

