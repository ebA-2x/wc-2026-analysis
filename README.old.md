# 2026 FIFA World Cup Prediction Tool

An interactive React application that analyzes football matchups and predicts win probabilities based on six key performance factors.

## Overview

This tool allows users to select any two teams from the 2026 World Cup roster and instantly receive:
- Win probability percentages for each team
- Factor ratings across six dimensions (form, squad quality, experience, defense, attack, fitness)
- Comparative visual analysis (probability bars and rating charts)
- Tactical verdict and predicted winner

## Project Genesis

**Concept**: The idea originated from my interest in sports analytics and creating a tool that makes match predictions transparent and understandable. Rather than a black-box prediction, I wanted to break down matchups across meaningful factors.

**Development**: I collaborated with Claude AI as a development partner to build the tool. Claude assisted significantly in:
- Architecting the React component structure
- Designing the prediction algorithm and factor weighting system
- Iterating on the UI/UX to ensure clarity and usability
- Troubleshooting technical challenges and refining performance

**My Contributions & Refinements**:
- Directed the overall vision and feature set
- Requested and guided multiple iterations on the UI design
- Refined the factor rating system to be more intuitive
- Made decisions on which prediction approach worked best (pivoted from live API integration to a self-contained model based on practical constraints)
- Edited and tested the tool to ensure accuracy and user experience

This was a collaborative process where I owned the direction and made key decisions about refinements, while leveraging Claude's technical expertise to execute efficiently.

## How It Works

1. **Team Selection**: Choose two teams from a dropdown of all 32 World Cup qualifiers
2. **Prediction Calculation**: The tool rates each team 0–10 across six factors:
   - **Recent Form**: Performance in the tournament so far
   - **Squad Quality**: Overall player talent and depth
   - **Big Match Experience**: Historical performance in high-stakes games
   - **Defensive Solidity**: Defensive organization and reliability
   - **Attacking Threat**: Offensive creativity and goal-scoring ability
   - **Fitness & Injuries**: Player availability and physical condition
3. **Results Display**: Win probability, factor comparison bars, and tactical analysis

## Technologies Used

- **React**: Component-based UI, state management (hooks)
- **JavaScript (ES6+)**: Prediction algorithm and logic
- **CSS**: Styling and responsive design
- **Claude AI**: Collaborative development and technical guidance

## Key Features

✓ Intuitive team selection interface  
✓ Real-time prediction calculations  
✓ Visual probability and factor comparison  
✓ Transparent analytical breakdown  
✓ Responsive design across devices  

## Getting Started

### Prerequisites
- Node.js and npm installed

### Usage

1. Select two teams from the dropdowns
2. Click "Predict Winner"
3. View the probability, factor ratings, and analysis

## What I Learned

- How to iterate on product design based on constraints and feedback
- Balancing feature ambition with practical implementation
- Working effectively with AI as a collaborative development tool
- The importance of transparent, user-friendly design in data-driven products
- Problem-solving when initial approaches (live API integration) needed adjustment

## Future Enhancements

- Live integration with current tournament standings and injury reports
- Historical matchup data and head-to-head comparisons
- User ability to adjust factor weights manually
- Export predictions to PDF or CSV
- Multi-round tournament bracket simulation

---

**Note**: This project was developed collaboratively with Claude AI, demonstrating effective use of AI tools in the development process while maintaining ownership of the core vision, decision-making, and refinement.
