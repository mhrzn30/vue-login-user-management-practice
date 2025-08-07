# Vue.js Login & User Management System

A comprehensive web application built with Vue 3, Quasar Framework, and modern development practices. This project demonstrates my learning journey during my internship, showcasing progressive skill development in frontend technologies.

## 🚀 Project Overview

This application features a complete user authentication system with advanced user management capabilities, including dynamic data tables, search functionality, and responsive design.

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **UI Framework**: Quasar Framework
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Development Environment**: Vite
- **Mock API**: JSON Server
- **Styling**: SCSS

## 📚 Daily Learning Journey

### Day 1: Project Setup & Vue Fundamentals

**Concepts Learned:**

- **Vue 3 Composition API**: Understanding `<script setup>` syntax
- **Reactive Data**: Using `ref()` for reactive variables
- **Project Structure**: Quasar CLI project organization
- **Component Architecture**: Single File Components (.vue)

**Code Examples:**

```javascript
// Reactive data with ref()
const email = ref('')
const password = ref('')

// Form handling
const handleLogin = () => {
  if (email.value && password.value) {
    // Login logic
  }
}
```

### Day 2: Form Validation & User Input

**Concepts Learned:**

- **Form Validation Rules**: Creating validation functions
- **Quasar Components**: `q-input`, `q-btn`, `q-form`
- **Event Handling**: `@submit`, `@click` events
- **Conditional Rendering**: Dynamic UI based on state

**Implementation:**

```javascript
const emailRule = [
  (val) => !!val || 'Email is required',
  (val) => /.+@.+\..+/.test(val) || 'Invalid email',
]
```

### Day 3: Routing & Navigation

**Concepts Learned:**

- **Vue Router**: Setting up routes and navigation
- **Route Guards**: Authentication-based routing
- **Programmatic Navigation**: `router.push()`
- **Local Storage**: Persisting authentication state

**Router Configuration:**

```javascript
Router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (to.path.startsWith('/dashboard') && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
```

### Day 4: Component Communication & Props

**Concepts Learned:**

- **Props System**: Parent-to-child data flow
- **Event Emitters**: Child-to-parent communication
- **Component Lifecycle**: `onMounted` hook
- **API Integration**: Using Axios for HTTP requests

**Props & Emits:**

```javascript
// Child Component
const props = defineProps({
  details: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['submit', 'cancel'])
```

### Day 5: Advanced Component Patterns

**Concepts Learned:**

- **Dialog Components**: Modal-based user interactions
- **Computed Properties**: Reactive calculated values
- **Watchers**: Responding to data changes
- **Data Transformation**: Using `Object.assign()` for state updates

**Dialog Implementation:**

```javascript
const isDialogOpen = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value),
})
```

### Day 6: API Integration & Data Management

**Concepts Learned:**

- **JSON Server**: Mock API setup
- **Async/Await**: Handling asynchronous operations
- **Error Handling**: Try-catch blocks
- **Data Fetching**: Loading states and error management

**API Integration:**

```javascript
const loadUsers = async () => {
  loading.value = true
  try {
    const response = await axios.get('http://localhost:3000/users')
    users.value = response.data
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
}
```

### Day 7: Dynamic Data Tables & Auto-Generation

**Concepts Learned:**

- **Dynamic Column Generation**: Using `Object.keys()` and `.map()`
- **Advanced Computed Properties**: Complex reactive calculations
- **Table Components**: Quasar `q-table` with sorting and filtering
- **Data Structure Analysis**: Automatic UI adaptation

**Auto-Generated Columns:**

```javascript
const columns = computed(() => {
  if (!props.details || props.details.length === 0) return []

  const firstUser = props.details[0]
  return Object.keys(firstUser).map((key) => ({
    name: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
    field: key,
    sortable: true,
    align: 'center',
  }))
})
```

### Day 8: Custom Search & Filtering

**Concepts Learned:**

- **Custom Filter Implementation**: Building search functionality from scratch
- **Array Methods**: `.filter()`, `.includes()`, `.toLowerCase()`
- **Real-time Search**: Debounced input with reactive filtering
- **Performance Optimization**: Computed properties for efficient updates

**Custom Search Function:**

```javascript
const filteredRows = computed(() => {
  if (!searchInput.value) return props.details

  const searchTerm = searchInput.value.toLowerCase()
  return props.details.filter((user) => user.name.toLowerCase().includes(searchTerm))
})
```

## 🎯 Key Learning Outcomes

### Technical Skills Developed:

1. **Vue 3 Composition API Mastery**
   - Reactive data management with `ref()` and `computed()`
   - Component lifecycle understanding
   - Advanced component communication patterns

2. **Modern JavaScript Proficiency**
   - ES6+ features (arrow functions, destructuring, async/await)
   - Array methods and functional programming concepts
   - Object manipulation and transformation

3. **UI/UX Implementation**
   - Responsive design principles
   - Component-based architecture
   - User interaction patterns (modals, forms, tables)

4. **State Management**
   - Local component state
   - Props and events system
   - Data flow patterns

5. **API Integration**
   - RESTful API consumption
   - Asynchronous data handling
   - Error management strategies

### Problem-Solving Approaches:

- **Debugging Techniques**: Console logging, Vue DevTools usage
- **Code Organization**: Separation of concerns, reusable components
- **Performance Considerations**: Computed properties vs methods
- **User Experience**: Loading states, error handling, form validation

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UserForm.vue    # Modal form with search functionality
│   └── UserTable.vue   # Dynamic data table with custom filtering
├── pages/              # Route-level components
│   ├── LoginPage.vue   # Authentication interface
│   ├── SignUpPage.vue  # User registration
│   └── Dashboard.vue   # Protected dashboard area
├── layouts/            # Application layouts
│   └── MainLayout.vue  # Main application shell
├── router/             # Routing configuration
│   ├── index.js       # Router setup with guards
│   └── routes.js      # Route definitions
└── database/           # Mock data
    └── db.json        # JSON Server database
```

## 🚀 Features Implemented

### Authentication System

- ✅ User login with validation
- ✅ Route protection with guards
- ✅ Persistent authentication state
- ✅ Responsive form design

### User Management

- ✅ Dynamic data table with auto-generated columns
- ✅ Real-time search functionality
- ✅ Sortable columns
- ✅ Modal-based user forms
- ✅ Search and populate functionality

### Technical Features

- ✅ Responsive design
- ✅ Component reusability
- ✅ Error handling
- ✅ Loading states
- ✅ Form validation

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mhrzn30/vue-login-user-management-practice.git
   cd Login_Signup
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start JSON Server (Mock API)**

   ```bash
   npx json-server --watch src/database/db.json --port 3000
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: `http://localhost:9000`
   - API: `http://localhost:3000`

## 📖 Learning Resources Used

- [Vue 3 Official Documentation](https://vuejs.org/)
- [Quasar Framework Guide](https://quasar.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/)

## 🎯 Future Enhancements

- [ ] Add TypeScript for better type safety
- [ ] Implement unit testing with Vitest
- [ ] Add real backend integration
- [ ] Implement advanced state management with Pinia
- [ ] Add internationalization (i18n)
- [ ] Implement PWA features

## 👨‍💻 Developer Notes

This project represents my journey from basic Vue.js concepts to advanced component patterns and real-world application development. Each day brought new challenges and learning opportunities, contributing to a comprehensive understanding of modern frontend development practices.

**Key Achievements:**

- Built a complete authentication system from scratch
- Implemented dynamic, data-driven UI components
- Mastered Vue 3 Composition API patterns
- Developed reusable, maintainable component architecture
- Gained experience with modern development tools and workflows

---

_This project was developed as part of my internship learning journey, demonstrating progressive skill development and practical application of modern web technologies._
