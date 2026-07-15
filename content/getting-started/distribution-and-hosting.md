---
title: "Distributing and hosting"
description: "Decide where the tool runs and how people access it."
---

A hosted web builder can build and deploy a web application. A desktop agent can prepare a web application for a hosting service or package a desktop application for download.

Building and distributing are different steps. A project first made in Google AI Studio may later be moved into a Git repository, adapted for Cloudflare Pages with Codex and deployed there. The catalogue records the original building tool. Work done later to move the project to another host does not change that attribution.

## Static websites

Cloudflare Pages can host static websites, guides and learning objects. Static files do not need a server running for each visitor.

## Software powered by AI

Software that calls an AI model while people use it needs server-side code. API keys must stay on the server. The service also needs spending limits and a way to handle errors from the model provider.

## Desktop applications

A desktop application runs on the user's computer. It can be distributed as an installer or application package. If it calls an online AI model, it still needs a way to store or request access credentials.
