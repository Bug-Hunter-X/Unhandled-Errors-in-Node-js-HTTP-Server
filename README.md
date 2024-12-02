# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in an HTTP server.  The `bug.js` file shows a basic HTTP server without error handling. The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## Bug Description

The original code lacks error handling mechanisms. If an unexpected error occurs during request processing (e.g., a database error or file system error), the server may crash unexpectedly, leading to application downtime.  Robust error handling is crucial for building reliable and resilient Node.js applications.

## Bug Solution

The solution implements comprehensive error handling using `try...catch` blocks and appropriate logging to capture and manage errors gracefully.  The server now handles errors without crashing and provides informative error messages.