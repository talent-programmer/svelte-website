---
section: self-hosted/0.4.0/self-hosted
---

# HTTPS certificates

While we highly recommend operating Gitpod using HTTPS, Gitpod is able to run on insecure HTTP.
If you use Gitpod's inernal docker registry, the downside of not using HTTPS is that Kubernetes won't be able to pull images from the registry because it considers the registry insecure.
You can either resort to using an [external registry](#docker-registry-optional) or use HTTPS. For running Gitpod on insecure HTTP, no HTTPS certificates are needed and you can skip this section.

> Important: The HTTPS certificates for your domain must include `your-domain.com`, `*.your-domain.com` and `*.ws.your-domain.com`. Beware that wildcard certificates are valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`).

To use the HTTPS certificates for your domain

- `echo values/https.yaml >> configuration.txt`
- place your certificates in `secrets/https-certificates/` like so:

```
 secrets/https-certificates:
  |- cert.pem
  |- chain.pem
  |- fullchain.pem
  |- privkey.pem
```

Generate the [dhparams.pem](https://security.stackexchange.com/questions/94390/whats-the-purpose-of-dh-parameters) file using

```
openssl dhparam -out secrets/https-certificates/dhparams.pem 2048
```

## Using Let's Encrypt

The most accessible means of obtaining HTTPS certificates is using [Let's Encrypt](https://letsencrypt.org/) which provides free certificats to anybody who can prove ownership of a domain.
Gitpod requires [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate) (e.g. `*.ws.your-domain.com`) which [can be obtained via Let's Encrypt](https://community.letsencrypt.org/t/acme-v2-production-environment-wildcards/55578) but require [proof of ownership via DNS](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge).
There is a [plethora of tutorials](https://www.google.com/search?q=letsencrypt+wildcard) how to [generate wildcard certificates](https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7) using Let's Encrypt.
Things get considerably easier when your domain is registered with a service for which a [Certbot DNS plugin exists](https://certbot.eff.org/docs/using.html#dns-plugins).

Asuming you have `certbot` installed, the following script will generate and configure the required certificates (notice the placeholders):

```bash
export DOMAIN=your-domain.cm
export EMAIL=your@email.here
export WORKDIR=/workspace/letsencrypt

certbot certonly \
    --config-dir $WORKDIR/config \
    --work-dir $WORKDIR/work \
    --logs-dir $WORKDIR/logs \
    --manual \
    --preferred-challenges=dns \
    --email $EMAIL \
    --server https://acme-v02.api.letsencrypt.org/directory \
    --agree-tos \
    -d *.ws.$DOMAIN \
    -d *.$DOMAIN \
    -d $DOMAIN

# move them into place
mkdir secrets/https-certificates
find $WORKDIR/config/live -name "*.pem" -exec cp {} secrets/https-certificates \;

# Generate dhparams
openssl dhparam -out secrets/https-certificates/dhparams.pem 2048

# Enable HTTPS
echo values/https.yaml >> configuration.txt
```
