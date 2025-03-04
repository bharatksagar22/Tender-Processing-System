from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, nullable=False)
    text_content = Column(String, nullable=True)
    user_id = Column(Integer, ForeignKey("users.id"))
