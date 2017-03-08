import PackageDescription

let package = Package(
    name: "swift-vapor",
    dependencies: [
        .Package(url: "https://github.com/vapor/vapor.git", majorVersion: 1, minor: 1)
    ]
)
