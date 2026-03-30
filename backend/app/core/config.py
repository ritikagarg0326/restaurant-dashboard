from pydantic_settings import BaseSettings
import os

class Settings(BaseSettings):
    MONGO_URI: str
    MONGO_DB: str = "restaurant_db"
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 480

    class Config:
        env_file = ".env" if os.getenv("ENV") != "production" else None

settings = Settings()
