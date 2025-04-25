import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static site, so no backend API routes are needed
  const httpServer = createServer(app);
  return httpServer;
}
