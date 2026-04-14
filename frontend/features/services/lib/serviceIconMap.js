const ICON_ALIASES = {
  shield: ["shield", "shield-alt", "security", "seguranca"],
  rocket: ["rocket", "performance", "speed", "alta-performance"],
  support: ["headset", "support", "suporte", "help"],
};

export function resolveServiceIconKey(rawIcon = "", serviceId = "") {
  const normalized = `${rawIcon} ${serviceId}`.toLowerCase();

  for (const [key, aliases] of Object.entries(ICON_ALIASES)) {
    if (aliases.some((alias) => normalized.includes(alias))) {
      return key;
    }
  }

  return "default";
}

export function getServiceIconLabel(iconKey) {
  switch (iconKey) {
    case "shield":
      return "Segurança";
    case "rocket":
      return "Performance";
    case "support":
      return "Suporte";
    default:
      return "Serviço";
  }
}
