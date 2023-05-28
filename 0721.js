const assert = require("assert");
const UnionFind = require("./union-find");

var accountsMerge = function (accounts) {
  const emailToName = new Map();
  const emailToEmail = new Map();
  const uf = new UnionFind();

  // Step 1: Build email-to-name and email-to-email mappings
  for (const account of accounts) {
    const [name, ...emails] = account;
    for (const email of emails) {
      emailToName.set(email, name);
      if (!emailToEmail.has(email)) {
        emailToEmail.set(email, email);
      }
    }
  }

  // Step 2: Union emails within the same account
  for (const account of accounts) {
    const [, firstEmail, ...emails] = account;
    for (const email of emails) {
      uf.union(firstEmail, email);
    }
  }

  // Step 3: Union emails belonging to the same person
  for (const [email, representativeEmail] of emailToEmail) {
    const parent = uf.find(email);
    uf.union(parent, representativeEmail);
  }

  // Step 4: Build merged accounts
  const mergedAccounts = new Map();
  for (const [email, representativeEmail] of emailToEmail) {
    const parent = uf.find(email);
    if (!mergedAccounts.has(parent)) {
      mergedAccounts.set(parent, []);
    }
    mergedAccounts.get(parent).push(email);
  }

  // Step 5: Convert merged accounts to desired format
  const result = [];
  for (const [representativeEmail, emails] of mergedAccounts) {
    const name = emailToName.get(representativeEmail);
    const account = [name, ...emails.sort()];
    result.push(account);
  }

  return result;
};

assert.deepEqual(
  accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]),
  [
    ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"],
  ]
);

assert.deepEqual(
  accountsMerge([
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
    ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
    ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
    ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
    ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
  ]),
  [
    ["Gabe", "Gabe0@m.co", "Gabe1@m.co", "Gabe3@m.co"],
    ["Kevin", "Kevin0@m.co", "Kevin3@m.co", "Kevin5@m.co"],
    ["Ethan", "Ethan0@m.co", "Ethan4@m.co", "Ethan5@m.co"],
    ["Hanzo", "Hanzo0@m.co", "Hanzo1@m.co", "Hanzo3@m.co"],
    ["Fern", "Fern0@m.co", "Fern1@m.co", "Fern5@m.co"],
  ]
);
