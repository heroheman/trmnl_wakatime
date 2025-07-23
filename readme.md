# WakaTime Dashboard Plugin for TRMNL Display

A comprehensive WakaTime dashboard plugin for [TRMNL](https://usetrmnl.com/) e-ink devices that displays your coding activity in beautiful, customizable charts and metrics. Transform your WakaTime data into elegant visualizations optimized for e-ink displays.

## ✨ Key Features

- **3 Chart Types**: Choose between line charts, bar charts, or GitHub-style contribution grids
- **Multiple Layout Options**: Full screen, half horizontal, half vertical, and quadrant layouts
- **Comprehensive Metrics Dashboard**: Display up to 10 different time-based metrics
- **Smart Data Grouping**: Automatic weekly/monthly median calculations for larger datasets
- **Customizable Time Periods**: 7 days to full year with both rolling and calendar-based calculations
- **Flexible Date Formats**: 8 different date display options for X-axis labels
- **Responsive Design**: Automatically adapts to different screen layouts with metric limits
- **Title Bar Control**: Show or hide the WakaTime branding
- **E-ink Optimized**: Designed specifically for 800x480 e-ink displays with proper contrast

## 📊 Available Metrics

- **Today**: Current day's coding time
- **Yesterday**: Previous day's activity
- **This Week**: Monday to today (calendar week)
- **Last Week**: Previous Monday to Sunday
- **Last 7 Days**: Rolling 7-day period
- **This Month**: 1st of month to today
- **Last Month**: Previous calendar month
- **Last 30 Days**: Rolling 30-day period
- **Last 3 Months**: Rolling 90-day period
- **Last Year**: Rolling 365-day period

## 🎨 Chart Types

### Line Charts
Smooth line visualization with optional data grouping:
- **7/30 days**: Individual daily points
- **90 days**: Weekly median grouping
- **1 year**: Monthly median grouping

### Bar Charts
Clean bar chart representation with:
- Individual daily values
- Custom date formatting on X-axis
- Optimized spacing for e-ink clarity

### Contribution Grid
GitHub-style contribution calendar:
- 364-day activity overview
- 6-level intensity scale
- Compact year-at-a-glance view

## 📋 Layout Options

- **Full Screen**: Dashboard + chart with full metrics display
- **Half Horizontal**: Compact dashboard + chart (max 4 metrics)
- **Half Vertical**: 2-column metric layout (max 6 metrics)
- **Quadrant**: Ultra-compact for mashups (max 6 metrics)

## ⚙️ Configuration Options

### Chart Layout
- **Lines**: Smooth line charts with optional grouping
- **Bars**: Clean bar chart visualization  
- **Contributions**: GitHub-style contribution grid

### Time Period
- **Last 7 Days**: Week overview
- **Last 30 Days**: Month overview (default)
- **Last 90 Days**: Quarter overview with weekly grouping
- **Last Year**: Annual overview with monthly grouping

### Data Grouping
- **Yes**: Enable weekly/monthly median calculations (default)
- **No**: Show individual daily values

### Date Format
- **DD.MM (15.07)**: European short format (default)
- **DD/MM (15/07)**: Alternative European format
- **MM-DD (07-15)**: US short format
- **DD MMM (15 Jul)**: Day with abbreviated month
- **MMM DD (Jul 15)**: Month with day
- **Weekday (Mon)**: Weekday names
- **YYYY-MM-DD (2024-07-15)**: ISO format
- **DD.MM.YYYY (15.07.2024)**: Full European format

### Dashboard Metrics
Select which metrics to display (multiple selection):
- All 10 metric types available
- Automatic layout optimization based on selection
- Smart value sizing for readability

### Show Title Bar
- **Yes**: Display WakaTime branding (default)
- **No**: Hide title bar for more content space

## 🚀 Installation

### Step 1: Fork the Plugin
1. **[Fork this plugin](https://usetrmnl.com/plugin_settings/123718)** to your TRMNL account

### Step 2: Get Your WakaTime Share URL
1. **Login** to [wakatime.com](https://wakatime.com)
2. **Navigate** to [https://wakatime.com/share/embed](https://wakatime.com/share/embed)
3. **Configure** the embed settings:
   - **Format**: Select "JSON"
   - **Chart Type**: Select "Coding activity"
   - **Date Range**: Select "last year"
   - **Check** the checkbox to agree to terms
4. **Click** "Get embeddable code"
5. **Copy** the WakaTime share URL from the generated code:

```javascript
$.ajax({
  type: 'GET',
  url: 'https://wakatime.com/share/@YOUR_USERNAME/xxxx-xxxx-xxxx-xxxx.json',
  dataType: 'jsonp',
  success: function(response) {
    console.log(response.data);
  },
});
```

You need: `https://wakatime.com/share/@YOUR_USERNAME/xxxx-xxxx-xxxx-xxxx.json`

### Step 3: Configure the Plugin
1. **Paste** your WakaTime share URL into the plugin settings polling url
2. **Customize** your preferences:
   - Choose chart type (lines, bars, contributions)
   - Select time period and metrics to display
   - Adjust date format and other visual options
3. **Set** refresh interval (recommended: 1440 minutes / 24 hours)
4. **Add** to your TRMNL playlist

## 🔄 How to Update

**Important**: As this plugin has custom fields, it can only be forked. This means it does not automatically update when new versions are available.

To update:
1. **Fork** the plugin again from the link above
2. **Reconfigure** your WakaTime URL and settings
3. **Replace** the old version in your playlist

## 🛠️ Technical Details

- **Refresh Strategy**: Polling
- **Data Source**: WakaTime public share URLs
- **Charts**: Highcharts.js + Chartkick.js
- **Template Engine**: Shopify Liquid
- **Framework**: TRMNL CSS Framework
- **Optimization**: E-ink specific contrast and spacing

## 📝 Version Information

**Plugin ID**: 123718  
**Refresh Interval**: 1440 minutes (24 hours)  
**Supported Layouts**: Full, Half Horizontal, Half Vertical, Quadrant

## 🔗 Links

### TRMNL Resources
• [TRMNL Recipes](https://usetrmnl.com/recipes)
• [TRMNL Plugins](https://usetrmnl.com/plugins)
• [TRMNL Integrations](https://usetrmnl.com/integrations)

### Documentation
• [TRMNL Plugin Templates](https://docs.usetrmnl.com/go/private-plugins/templates)
• [Advanced Templates](https://docs.usetrmnl.com/go/private-plugins/templates-advanced)
• [TRMNL Framework](https://usetrmnl.com/framework)
• [Liquid Template Language](https://shopify.github.io/liquid/)

### WakaTime
• [WakaTime Dashboard](https://wakatime.com)
• [WakaTime Embed Setup](https://wakatime.com/share/embed)