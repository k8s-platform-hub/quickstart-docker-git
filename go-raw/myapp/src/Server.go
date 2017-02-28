package main

import (
  "os"
  "fmt"
  "strings"
  "net/http"
)

/**
 * Handler for all errors.
 */
func errorHandler(w http.ResponseWriter, r *http.Request, status int) {
    w.WriteHeader(status)
    if status == http.StatusNotFound {
      fmt.Println("Page not found url: " + r.URL.Path)
      fmt.Fprint(w, "(404) Page Not Found!")
      return
    }
    fmt.Fprint(w, "Something went wrong! -- go server")
}

/**
 * Handles the / request with the html telling what to do.
 */
func handler(w http.ResponseWriter, r *http.Request) {
  if r.URL.Path != "/" {
    errorHandler(w, r, http.StatusNotFound)
    return
  }
  domain := strings.Split(r.Host, ":")[0]

  w.Header().Set("Content-Type", "text/html")
  w.WriteHeader(200)
  fmt.Fprintf(w, `<h2>Hello world</h2>`, domain, strings.Split(domain, ".")[0])
}

// The entry point.
func main() {
  port := os.Getenv("PORT")

  // port is not present then set default.
  if port == "" {
    port = "8080"
  }

  http.HandleFunc("/", handler)
  fmt.Println("Server running @ 0.0.0.0:" + port)
  http.ListenAndServe(":" + port, nil)
}
