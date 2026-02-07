# Neural Network Computation Graph Visualizer

A neural network computation graph visualizer built on top of a custom micrograd-style autograd engine, designed to make backpropagation and gradient flow intuitive and transparent.

This project helps you see what’s actually happening inside a neural network — values flowing forward and gradients flowing backward.

## Motivation

Modern deep learning frameworks abstract away the fundamentals of automatic differentiation and backpropagation.

This project was built to:

- Deeply understand how autograd works under the hood

- Visualize computation graphs instead of treating them as black boxes

- Bridge the gap between theory and implementation

- The core autograd engine is inspired by the educational work of Andrej Karpathy, particularly his micrograd walkthroughs.

## What This Project Does

- Builds a micrograd-style automatic differentiation engine from scratch

- Constructs a computation graph during forward passes

- Computes gradients via reverse-mode autodiff

### Visualizes:

- Nodes (operations & values)

- Edges (dependencies)

- Forward values

- Backward gradients

This makes it an excellent tool for learning, debugging, and teaching neural networks.

## Tech Stack & Concepts
### Core Concepts

- Automatic Differentiation (Reverse Mode)

- Computation Graphs

- Backpropagation

- Chain Rule

- Neural Network Fundamentals

### Tech Used

- Custom micrograd-style engine (from scratch)

- Graph layout & visualization logic

- Frontend visualization (ReactFlow and elkjs)

## Credits & Inspiration

This project is heavily inspired by Andrej Karpathy’s educational content on neural networks and automatic differentiation.

- The autograd engine follows the micrograd philosophy

- All code is written independently for learning purposes

- Visualization and extensions are original additions

If you haven’t already, I highly recommend checking out his work.

## Support

If you find this project helpful:

- ⭐ Star the repository

- 🍴 Fork it

- Share feedback or open an issue

It helps a lot and motivates further improvements!
