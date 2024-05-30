import { test, expect, request } from "@playwright/test";

test.describe("Third-party services", () => {
  test("Check SMS creditos", async () => {
    const context = await request.newContext({
      baseURL: "https://httpbin.org/",
    });
    const res = await context.get("/get");
    const json = await res.json();
    await expect(json).toHaveProperty("url");
  });
});
