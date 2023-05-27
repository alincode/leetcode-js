class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    } else if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent.set(rootX, rootY);
    }
  }
}

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
