{-# LANGUAGE OverloadedStrings #-}

import           Web.Spock
import           Web.Spock.Config
import           Data.Text        (pack)
import           Conf


main :: IO ()
main = do
  appCfg <- defaultSpockCfg () PCNoDatabase ()
  runSpock port (spock appCfg routes)

routes :: SpockM () () () ()
routes = do
  get root $ do
    text $ pack "Hello Haskell Spock"

  get "inside" $ do
  	text $ pack "Hello from the inside"