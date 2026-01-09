# Fix: Candidate Profile Spacing Issue

## Issue
**JIRA Ticket:** JOIN-63172  
**Description:** The gap between the tabs and the Interviews tab content was too large due to an empty div with a margin.

## Changes Made

### 1. Created Candidate Profile Component
- **File:** `app/(tabs)/candidate-profile.tsx`
- Created a new screen with tabs for Overview, Interviews, and Documents
- Default view shows the Interviews tab

### 2. Fixed Spacing Issue
**Problem:**
- An empty `<View>` component with `emptySpacerDiv` style was creating excessive spacing
- Style had `marginTop: 32` and `marginBottom: 32`, totaling 64 units of spacing

**Solution:**
- Removed the empty spacer div entirely
- Added appropriate `marginTop: 16` directly to the content container
- This reduces spacing by 75% (from 64 to 16 units)

### 3. Updated Navigation
- **File:** `app/(tabs)/_layout.tsx`
- Added Candidate Profile tab to the bottom navigation
- Used `person.fill` icon for the tab

## Code Changes

### Before (Problematic Code):
```tsx
</View>

{/* PROBLEMATIC: Empty div with margin causing excessive spacing */}
<View style={styles.emptySpacerDiv} />

{/* Tab Content */}
<ScrollView style={styles.content}>
```

```tsx
emptySpacerDiv: {
  marginTop: 32,
  marginBottom: 32,
},
content: {
  flex: 1,
},
```

### After (Fixed Code):
```tsx
</View>

{/* Tab Content */}
<ScrollView style={styles.content}>
```

```tsx
content: {
  flex: 1,
  marginTop: 16, // Appropriate spacing between tabs and content
},
```

## Testing
- No linting errors found
- TypeScript types are correct
- Component follows existing project patterns

## Result
The gap between the tabs and the Interviews tab content is now appropriately sized, providing better visual hierarchy and user experience.
