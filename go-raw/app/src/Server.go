package main

import (
  "os"
  "fmt"
  "net/http"
)

/**
 * Handler for all errors.
 */
func errorHandler(w http.ResponseWriter, r *http.Request, status int) {
    w.WriteHeader(status)
    w.Header().Set("Content-Type", "text/html")
    if status == http.StatusNotFound {
      fmt.Println("Page not found url: " + r.URL.Path)
      fmt.Fprint(w, "<h1>(404) Page Not Found!</h1>")
      return
    }
    fmt.Fprint(w, "<h1>Something went wrong! -- go server</h1>")
}

/**
 * Handles the / request with the html telling what to do.
 */
func handler(w http.ResponseWriter, r *http.Request) {
  if r.URL.Path != "/" {
    errorHandler(w, r, http.StatusNotFound)
    return
  }
  w.Header().Set("Content-Type", "text/html")
  w.WriteHeader(200)
  fmt.Fprintf(w, `<h1>Hello world</h1>`)
}

// The entry point.
func main() {
  port := os.Getenv("APP_PORT")

  // port is not present then set default.
  if port == "" {
    port = "8080"
  }

  http.HandleFunc("/", handler)
  fmt.Println("Server running @ 0.0.0.0:" + port)
  http.ListenAndServe(":" + port, nil)
}
