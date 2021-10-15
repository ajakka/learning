-----------------------------------------------

DMARC - Domain-based Message Authentication Reporting & Conformance
TXT	_dmarc			v=DMARC1; p=reject; rua=mailto:contact@masaratapp.com

-----------------------------------------------

SPF   - Sender Policy Framework
TXT	@			v=spf1 a ip4:0.0.0.0 -all

Google Workspace Only
TXT	@			v=spf1 include:_spf.google.com ~all

-----------------------------------------------

DKIM  - DomainKeys Identified Mail
TXT	masarat_domainkey	v=DKIM1;k=rsa;p=PUBLIC_KEY

-----------------------------------------------
