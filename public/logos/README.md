# Logo System

## Directory Structure

```
public/logos/
├── models/          # Model provider logos
│   ├── openai.svg
│   ├── anthropic.svg
│   ├── azure.svg
│   └── ...
├── tools/           # Tool logos (future)
├── storage/         # Storage logos (future)
└── README.md
```

## Configuration

### 1. JSON Structure
Add `"logo": true` and `"showText": false` to control logo and text display:

```json
{
  "id": "openai",
  "name": "OpenAI",
  "logo": true,
  "showText": true,
  "url": "https://github.com/..."
}
```

**Logo Control:**
- `"logo": true` - Shows the logo (if file exists)
- `"logo": false` - Hides the logo (text only)
- No `logo` field - Defaults to false (text only)

**Text Control:**
- `"showText": true` - Shows the text (default)
- `"showText": false` - Hides the text (logo only)
- No `showText` field - Defaults to true (shows text)

### 2. Component Usage
Pass the `logoPath` prop to specify the subdirectory:

```jsx
<StackSection
  title="Models"
  items={modelsData.items}
  logoPath="logos/models"  // Points to /public/logos/models/
/>
```

### 3. File Naming
Logo files must match the item `id` exactly:
- Item ID: `"openai"` → File: `openai.svg`
- Item ID: `"azure"` → File: `azure.svg`

## Current Setup

**Models Section:**
- ✅ Uses `logoPath="logos/models"`
- ✅ All model items have `"logo": true`
- ✅ Logo files exist in `/public/logos/models/`

**Other Sections:**
- Uses default `logoPath="logos"` (root level)
- Add logos to `/public/logos/{id}.svg` for other categories

## Logo Display Logic

1. **Component checks:** `showLogo={item.logo}` AND `id` exists
2. **Path built:** `/{logoPath}/{id}.svg`
3. **Fallback:** If logo fails to load, only text shows

## Examples

**Working Paths:**
- OpenAI: `/logos/models/openai.svg` ✅
- Azure: `/logos/models/azure.svg` ✅
- Groq: `/logos/models/grq.svg` ✅

**Future Expansion:**
- Tools: `/logos/tools/docker.svg`
- Storage: `/logos/storage/redis.svg`