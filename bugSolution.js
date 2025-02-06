```javascript
const query = {
  field: { $regex: '^pattern$', $options: 'i' },
};

// ... other code ...

const cursor = collection.find(query);

// ... other code ...
```