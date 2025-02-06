```javascript
const query = {
  field: { $regex: /pattern/i },
};

// ... other code ...

const cursor = collection.find(query);

// ... other code ...
```