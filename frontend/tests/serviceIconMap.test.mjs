import test from "node:test";
import assert from "node:assert/strict";
import {
  getServiceIconLabel,
  resolveServiceIconKey,
} from "../features/services/lib/serviceIconMap.js";

test("resolveServiceIconKey maps font-awesome rocket class to rocket icon", () => {
  assert.equal(resolveServiceIconKey("fas fa-rocket", "performance"), "rocket");
});

test("resolveServiceIconKey maps headset class to support icon", () => {
  assert.equal(resolveServiceIconKey("fas fa-headset", "suporte"), "support");
});

test("resolveServiceIconKey uses service id as fallback when icon is empty", () => {
  assert.equal(resolveServiceIconKey("", "seguranca"), "shield");
});

test("getServiceIconLabel returns human friendly labels", () => {
  assert.equal(getServiceIconLabel("shield"), "Segurança");
  assert.equal(getServiceIconLabel("rocket"), "Performance");
  assert.equal(getServiceIconLabel("support"), "Suporte");
  assert.equal(getServiceIconLabel("default"), "Serviço");
});
